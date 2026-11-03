// export async function uploadFile(file: File | any) {
//   const formData = new FormData();
//   formData.append("image", file);

//   const response = await fetch(
//     "https://api.imgbb.com/1/upload?key=176f3ea46553b0e07c37bfdcf3a8daec",
//     {
//       body: formData,
//       method: "POST",
//     },
//   ).catch((e) => console.log("Uploading error:", e.message));

//   const data = (await response.json()) ?? null;

//   return {
//     url: data?.data?.url ?? null,
//   };
// }
