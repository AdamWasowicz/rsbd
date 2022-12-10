namespace RSBD_BE.Exceptions
{
    public class NoDataException : Exception
    {
        public NoDataException() : base("There is no data in table")
        {

        }
    }
}
