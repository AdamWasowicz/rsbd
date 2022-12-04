FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app


#Expose ports
ARG ASPNETCORE_EXPOSE_PORT ASPNETCORE_EXPOSE_PORT
EXPOSE $ASPNETCORE_EXPOSE_PORT


FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["RSBD_BE.csproj", "."]
RUN dotnet restore "./RSBD_BE.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "RSBD_BE.csproj" -c Release -o /app/build


FROM build AS publish
RUN dotnet publish "RSBD_BE.csproj" -c Release -o /app/publish


FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "RSBD_BE.dll"]