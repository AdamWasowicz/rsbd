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

        public Base_PostService(BaseDbContext writeContext, ReadOnlyBaseDbContext readContext, string regionId)
        {
            _writeContext = writeContext;
            _readContext = readContext;
            _regionId = regionId;
        }
        
        
        public int InsertData(CreatePostDTO dto)
        {
            Post newPost = new Post()
            {
                Email = dto.Email,
                RegionId = _regionId,
                TextContent = dto.TextContent,
                CreationDate = DateTime.Now,
            };

            _writeContext.Add(newPost);
            return newPost.Id;
        }

        public bool UpdateData(UpdatePostDTO dto)
        {
            var post = _readContext.Posts
                .Where(p => p.Id == dto.Id)
                    .FirstOrDefault();

            if (post == null)
                return false;

            // Update
            post.TextContent = dto.TextContent;

            _writeContext.Update(post);
            _writeContext.SaveChanges();

            return true;
        }

        public bool DeleteData(DeletePostDTO dto)
        {
            var post = _readContext.Posts
                .Where(p => p.Id == dto.Id)
                    .FirstOrDefault();

            if (post == null)
                return false;

            _writeContext.Remove(post);
            _writeContext.SaveChanges();

            return true;
        }

        public List<Post> GetAllData()
        {
            var posts = _readContext.Posts
                .ToList();

            return posts;
        }

        public Post GetDataById(int id)
        {
            var post = _readContext.Posts
                .Where(p => p.Id == id)
                    .FirstOrDefault();

            if (post == null)
                throw new NoDataInTableException();

            return post;
        }

        public bool IsServerPrimaryUp()
        {
            return _writeContext.Database.CanConnect();
        }

        public bool IsServerSecondaryUp()
        {
            return _writeContext.Database.CanConnect();
        }
    }
}
