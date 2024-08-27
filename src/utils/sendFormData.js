export default async function sendFormData(formData) {
    const response = await fetch('https://happy-mixed-gaura.glitch.me/https://4575-34-133-99-197.ngrok-free.app/responses/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(formData),
    })
  
    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  
    return await response.json()
  }