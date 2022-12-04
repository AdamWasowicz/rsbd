namespace RSBD_BE.Interfaces
{
    public interface IEU_Service
    {
        bool IsAnythingInDatabase(int db);
        void InsertExampleData(int db);
        void ClearData(int db);
    }
}
