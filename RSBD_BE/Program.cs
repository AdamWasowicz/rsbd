using Microsoft.EntityFrameworkCore;
using RSBD_BE.Entities.DbContexts.AS;
using RSBD_BE.Entities.DbContexts.EU;
using RSBD_BE.Entities.DbContexts.US;
using RSBD_BE.Interfaces;
using RSBD_BE.Middleware;
using RSBD_BE.Services;

namespace RSBD_BE
{
    public class Program
    {
        public static void AddEuDbContexts(WebApplicationBuilder builder)
        {
            //WRITE
            var EU_Write_localCS = builder.Configuration["DbConnectionStrings:EU:Write"];
            var connectionString = Environment.GetEnvironmentVariable("DB_EU_WRITE_CS") ?? EU_Write_localCS;

            builder.Services.AddDbContext<EU_DbContext>(options =>
                options.UseNpgsql(connectionString)
            );


            //READ
            var EU_Read_localCS = builder.Configuration["DbConnectionStrings:EU:Read"];
            var connectionStringRead = Environment.GetEnvironmentVariable("DB_EU_READ_CS") ?? EU_Read_localCS;

            builder.Services.AddDbContext<EU_ReadOnlyDbContext>(options =>
                options.UseNpgsql(connectionStringRead)
            );
        }

        public static void AddUsDbContexts(WebApplicationBuilder builder)
        {
            //WRITE
            var US_Write_localCS = builder.Configuration["DbConnectionStrings:US:Write"];
            var connectionString = Environment.GetEnvironmentVariable("DB_US_WRITE_CS") ?? US_Write_localCS;

            builder.Services.AddDbContext<US_DbContext>(options =>
                options.UseNpgsql(connectionString)
            );


            //READ
            var US_Read_localCS = builder.Configuration["DbConnectionStrings:US:Read"];
            var connectionStringRead = Environment.GetEnvironmentVariable("DB_US_READ_CS") ?? US_Read_localCS;

            builder.Services.AddDbContext<US_ReadOnlyDbContext>(options =>
                options.UseNpgsql(connectionStringRead)
            );
        }

        public static void AddAsDbContexts(WebApplicationBuilder builder)
        {
            //WRITE
            var AS_Write_localCS = builder.Configuration["DbConnectionStrings:AS:Write"];
            var connectionString = Environment.GetEnvironmentVariable("DB_AS_WRITE_CS") ?? AS_Write_localCS;

            builder.Services.AddDbContext<AS_DbContext>(options =>
                options.UseNpgsql(connectionString)
            );


            //READ
            var AS_Read_localCS = builder.Configuration["DbConnectionStrings:AS:Read"];
            var connectionStringRead = Environment.GetEnvironmentVariable("DB_AS_READ_CS") ?? AS_Read_localCS;

            builder.Services.AddDbContext<AS_ReadOnlyDbContext>(options =>
                options.UseNpgsql(connectionStringRead)
            );
        }

        public static void AddCORS(WebApplicationBuilder builder)
        {
            builder.Services.AddCors(o => o.AddPolicy("Dev", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
        }



        public static void Main(string[] args)
        {
            // BUILDER
            var builder = WebApplication.CreateBuilder(args);

            // Database contexts
            AddEuDbContexts(builder);
            AddUsDbContexts(builder);
            AddAsDbContexts(builder);
            AddCORS(builder);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<IEU_PostService, EU_PostService>();
            builder.Services.AddScoped<IUS_PostService, US_PostService>();
            builder.Services.AddScoped<IAS_PostService, AS_PostService>();
            builder.Services.AddScoped<IRegionProvider, RegionProvider>();
            builder.Services.AddScoped<IPostService, PostService>();

            // Middleware
            builder.Services.AddScoped<ErrorHandlingMiddleware>();


            // APP
            var app = builder.Build();

            // CORS
            app.UseCors("Dev");

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            // Middleware
            app.UseMiddleware<ErrorHandlingMiddleware>();

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}