export default async function sendFormData(formData) {
    const response = await fetch('http://localhost:3000/responses/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
  
    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
  
    return await response.json()
  }