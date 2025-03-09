export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    return { message: "Failed to send email" };
  }
};
