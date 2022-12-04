using RSBD_BE.Entities;
using RSBD_BE.Entities.DbContexts.EU;
using RSBD_BE.Interfaces;

namespace RSBD_BE.Services
{
    public class EU_Service : IEU_Service
    {
        private readonly EU_DbContext _writeContext;
        private readonly EU_ReadOnlyDbContext _readContext;

        public EU_Service(
            EU_DbContext writeContext,
            EU_ReadOnlyDbContext readContext)
        {
            _writeContext = writeContext;
            _readContext = readContext;
        }

        public void ClearData(int db)
        {
            if (db == 0)
            {
                var items = _writeContext.Posts.ToList();
                _writeContext.RemoveRange(items);
                _writeContext.SaveChanges();
            }
            else
            {
                var items = _readContext.Posts.ToList();
                _readContext.RemoveRange(items);
                _readContext.SaveChanges();
            }
        }

        public void InsertExampleData(int db)
        {
            Post ed = new Post()
            {
                Email = "adam@test.pl",
                TextContent = "Test",
            };

            if (db == 0)
            {
                _writeContext.Add(ed);
                _writeContext.SaveChanges();
            }
            else if (db == 1)
            {
                _readContext.Add(ed);
                _readContext.SaveChanges();
            }
                
                
        }

        public bool IsAnythingInDatabase(int db)
        {
            if (db == 0)
                return _writeContext.Posts.Any();
            else
                return _readContext.Posts.Any();
        }
    }
}
