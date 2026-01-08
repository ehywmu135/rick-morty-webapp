using System.Net.Http.Json;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyHeader()
              .AllowAnyMethod()
              .WithOrigins("http://localhost:4200");
    });
});

// Add services to the container
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure middleware BEFORE the endpoints
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseCors();

// 1. Allow serving default files like index.html
app.UseDefaultFiles();

// 2. Allow serving static files from wwwroot (JS, CSS, assets)
app.UseStaticFiles();

// 3. Fallback for Angular routing (SPA)
app.MapFallbackToFile("index.html");


app.MapGet("/api/character", async () =>
{
    var http = new HttpClient();

    var result = await http.GetFromJsonAsync<object>(
        "https://rickandmortyapi.com/api/character"
    );

    return result;
});
app.MapGet("/api/character/{id:int}", async (int id) =>
{
    var http = new HttpClient();

    // Fetch character details from Rick & Morty API
    var result = await http.GetFromJsonAsync<object>(
        $"https://rickandmortyapi.com/api/character/{id}"
    );

    return Results.Ok(result);
});


app.Run();
