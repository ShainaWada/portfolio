import { FormData } from "@/app/components/ui/ContactForm";

export function sendEmail(data: FormData) {
  const apiEndpoint = "/api/contact";

  fetch(apiEndpoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => {
      alert(err);
    });
}
