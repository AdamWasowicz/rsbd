namespace RSBD_BE.Exceptions
{
    public class InvalidRegionIdException : Exception
    {
        public InvalidRegionIdException() : base("Region Id is not valid")
        {

        }
    }
}
