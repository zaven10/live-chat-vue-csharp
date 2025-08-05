# Use the official .NET 9 SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy csproj and restore dependencies
COPY src/*.csproj ./
RUN dotnet restore

# Copy all files and build
COPY src/. ./
RUN dotnet publish -c Release -o /app

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app ./

# Set the ASP.NET Core URLs to listen on port 80
ENV ASPNETCORE_URLS=http://+:80

# Expose port 80
EXPOSE 80

ENTRYPOINT ["dotnet", "src.dll"] 