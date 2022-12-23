namespace RSBD_BE.Exceptions
{
    public class ResourceNotFoundException : Exception
    {
        public ResourceNotFoundException() : base("Resource not found")
        {

        }
    }
}
