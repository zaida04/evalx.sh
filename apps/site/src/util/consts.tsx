import Link from "next/link";

export const title = "EvalX | Code. Post. Done." as const;
export const description =
  "Run code from any supported language with just a POST request. Focus on what matters, building your great software. Leave the rest to us." as const;
export const url = "https://evalx.sh/" as const;

export const topbar = {
  "/home": "/",
  "/docs": "/docs",
  "/pricing": "/pricing",
} as const;

export const genNav = Object.keys(topbar).map((key) => (
  <li className="text-xl" key={key}>
    <Link href={topbar[key]}>{key}</Link>
  </li>
));

export const codeSnippets = {
  Curl: `
curl -X POST \\
    -H "Content-Type: application/json" \\
    -H "Authorization: Bearer test-key-1" \\
    -d '{"code": "console.log(\\'Hello world!\\')", "language": "js"}' \\
https://api.evalx.sh/eval
  `,
  JavaScript: `
await fetch("https://api.evalx.sh/eval", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer test-key-1"
    },
    body: JSON.stringify({ code: "console.log('Hello world!')", language: "js" })
});
    `,
  Python: `
import requests

requests.post(
    "https://api.evalx.sh/eval",
    headers={"Content-Type": "application/json", "Authorization": "Bearer test-key-1"},
    json={"code": "console.log('Hello world!')", "language": "js"}
)
`,
  ".NET": `
using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

class Program
{
    static async Task Main()
    {
        var client = new HttpClient();
        client.DefaultRequestHeaders.Add("Authorization", "Bearer test-key-1");

        var jsonContent = JsonSerializer.Serialize(new { code = "console.log('Hello world!')", language = "js" });
        await client.PostAsync("https://api.evalx.sh/eval", new StringContent(jsonContent, System.Text.Encoding.UTF8, "application/json"));
    }
}
  `,
  Java: `
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpHeaders;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpResponse.BodyHandlers;

public class Main {
    public static void main(String[] args) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        String requestBody = "{\\"code\\":\\"console.log('Hello world!')\\", \\"language\\": \\"js\\"}";
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.evalx.sh/eval"))
                .header("Content-Type", "application/json")
                .header("Authorization", "Bearer test-key-1")
                .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                .build();

        client.send(request, BodyHandlers.ofString());
    }
}
  `,
};
