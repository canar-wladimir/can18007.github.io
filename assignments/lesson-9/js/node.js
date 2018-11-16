unirest.get("https://getvideo.p.rapidapi.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnfWlot6h_JM")
.header("opYFHXXoNHmshVoQGMKmNOMoTkTTp1mhMIdjsnUQYmwNdprBY5", "opYFHXXoNHmshVoQGMKmNOMoTkTTp1mhMIdjsnUQYmwNdprBY5")
.header("getvideo.p.rapidapi.com", "getvideo.p.rapidapi.com")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});