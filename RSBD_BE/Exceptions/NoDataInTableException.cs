namespace RSBD_BE.Exceptions
{
    public class NoDataInTableException : Exception
    {
        public NoDataInTableException() : base("There is no data in table")
        {

        }
    }
}
