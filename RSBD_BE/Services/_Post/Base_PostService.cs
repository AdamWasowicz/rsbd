using RSBD_BE.Entities;
using RSBD_BE.Entities.DbContexts.Base;
using RSBD_BE.Entities.DbContexts.EU;
using RSBD_BE.Entities.DbContexts.US;
using RSBD_BE.Exceptions;
using RSBD_BE.Interfaces;
using RSBD_BE.Models;

namespace RSBD_BE.Services
{
    public class Base_PostService : IBase_PostService
    {
        private readonly BaseDbContext _writeContext;
        private readonly ReadOnlyBaseDbContext _readContext;
        private readonly string _regionId = "DEFAULT";
        private readonly string _readServerId = "Read";
        private readonly string _writeServerId = "Write";

        public Base_PostService(BaseDbContext writeContext, ReadOnlyBaseDbContext readContext, string regionId)
        {
            _writeContext = writeContext;
            _readContext = readContext;
            _regionId = regionId;
        }
        
        
        public Post InsertData(CreatePostDTO dto)
        {
            if (dto.TextContent.Length > 256 || dto.TextContent.Length == 0)
                throw new InvalidDataException("Data has errors");

            Post newPost = new Post()
            {
                Email = dto.Email,
                RegionId = _regionId,
                TextContent = dto.TextContent,
                CreationDate = DateTime.Now,
            };

            try
            {
                _writeContext.Add(newPost);
                _writeContext.SaveChanges();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _writeServerId);
            }


            return newPost;
        }

        public Post InsertExampleData()
        {
            Post newPost = new Post()
            {
                Email = "test@test.pl",
                RegionId = _regionId,
                TextContent = DateTime.Now.ToString(),
                CreationDate = DateTime.Now,
            };

            try
            {
                _writeContext.Add(newPost);
                _writeContext.SaveChanges();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _writeServerId);
            }

            return newPost;
        }

        public Post UpdateData(UpdatePostDTO dto)
        {
            if (dto.TextContent.Length > 256 || dto.TextContent.Length == 0)
                throw new InvalidDataException("Data has errors");

            Post? post = null;
            try
            {
                post = _readContext.Posts
                    .Where(p => p.Id == dto.Id)
                        .FirstOrDefault();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _readServerId);
            }

            if (post == null)
                throw new ResourceNotFoundException();

            // Update
            post.TextContent = dto.TextContent;


            try
            {
                _writeContext.Update(post);
                _writeContext.SaveChanges();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _writeServerId);
            }

            return post;
        }

        public bool DeleteData(DeletePostDTO dto)
        {
            Post? post = null;
            try
            {
                post = _writeContext.Posts
                    .Where(p => p.Id == dto.Id)
                        .FirstOrDefault();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _readServerId);
            }


            if (post == null)
                throw new ResourceNotFoundException();

            try
            {
                _writeContext.Remove(post);
                _writeContext.SaveChanges();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _writeServerId);
            }

            return true;
        }

        public List<Post> GetAllData()
        {
            List<Post> posts = new List<Post>();

            try
            {
                posts = _readContext.Posts
                    .ToList();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _readServerId);
            }

            return posts;
        }

        public Tuple<List<Post>, List<Post>> GetDataFromBothServers()
        {
            List<Post> primary = _writeContext.Posts.ToList();
            List<Post> secondary = _readContext.Posts.ToList();

            return new Tuple<List<Post>, List<Post>>(primary, secondary);
        }

        public Post GetDataById(int id)
        {
            Post? post = null;
            try
            {
                post = _readContext.Posts
                    .Where(p => p.Id == id)
                        .FirstOrDefault();
            }
            catch (System.InvalidOperationException _)
            {
                throw new ServerNotAvailableException(_regionId, _readServerId);
            }

            if (post == null)
                throw new ResourceNotFoundException();

            return post;
        }

        public bool IsServerPrimaryUp()
        {
            try
            {
                _writeContext.Posts.ToList();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public bool IsServerSecondaryUp()
        {
            try
            {
                _readContext.Posts.ToList();
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
