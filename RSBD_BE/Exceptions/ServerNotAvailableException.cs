namespace RSBD_BE.Exceptions
{
    public class ServerNotAvailableException : Exception
    {
        public ServerNotAvailableException(string region, string role) : base("Server not available " + region + " " + role)
        {

        }
    }
}
