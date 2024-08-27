export default async function sendFormData(formData) {
    const response = await fetch('http://34.133.99.197:3000/responses/create', {
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