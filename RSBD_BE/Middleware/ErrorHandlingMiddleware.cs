using RSBD_BE.Exceptions;

namespace RSBD_BE.Middleware
{
    public class ErrorHandlingMiddleware: IMiddleware
    {
        public Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                next.Invoke(context);
            }
            catch (InvalidRegionIdException exception)
            {
                context.Response.StatusCode = 400;
                context.Response.WriteAsync(exception.Message);
            }
            catch (ResourceNotFoundException exception)
            {
                context.Response.StatusCode = 400;
                context.Response.WriteAsync(exception.Message);
            }
            catch (ArgumentNullException exception)
            {
                context.Response.StatusCode = 400;
                context.Response.WriteAsync("Wrong data provided");
            }
            catch (Exception exception)
            {
                context.Response.StatusCode = 500;
                context.Response.WriteAsync("Something went wrong with server");
            }

            return Task.CompletedTask;
        }
    }
}
