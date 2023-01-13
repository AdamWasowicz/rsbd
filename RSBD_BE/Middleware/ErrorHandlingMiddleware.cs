using RSBD_BE.Exceptions;

namespace RSBD_BE.Middleware
{
    public class ErrorHandlingMiddleware: IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            try
            {
                await next.Invoke(context);
            }
            catch (InvalidRegionIdException exception)
            {
                context.Response.StatusCode = 400;
                await context.Response.WriteAsync(exception.Message);
            }
            catch (ResourceNotFoundException exception)
            {
                context.Response.StatusCode = 400;
                await context.Response.WriteAsync(exception.Message);
            }
            catch (ArgumentNullException exception)
            {
                context.Response.StatusCode = 400;
                await context.Response.WriteAsync("Wrong data provided");
            }
            catch (InvalidDataException exception)
            {
                context.Response.StatusCode = 400;
                await context.Response.WriteAsync(exception.Message);
            }
            catch (ServerNotAvailableException exeption)
            {
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync(exeption.Message);
            }
            catch (Exception exception)
            {
                context.Response.StatusCode = 500;
                await context.Response.WriteAsync("Something went wrong with server");
            }
        }
    }
}
