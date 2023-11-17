import React from 'react';

export default function URLForm() {
    const [textInForm, setTextInForm] = React.useState("");
    const [shortenedURL, setShortenedURL] = React.useState("");
    const [isProcessing, setIsProcessing] = React.useState(false);
    const handleShorten = async (e) => {
        e.preventDefault();
        let updatedTextInForm = textInForm;
        if (textInForm) {
            try {
                if (!textInForm.startsWith('http://') && !textInForm.startsWith('https://')) {
                    updatedTextInForm = "https://" + textInForm;
                    setTextInForm(updatedTextInForm);
                }
                setIsProcessing(true);
                const response = await fetch('http://localhost:3001/api/shorten-url', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_URL_SHORTENER_API_KEY,
                    },
                    body: JSON.stringify( {url: updatedTextInForm}),
                    
                });
                if (response.ok) {
                    const data = await response.json();
                    setShortenedURL(data.shortenedURL);
                    setTextInForm("");
                } else {
                    alert('Failed to shorten url');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while shortening the URL');
            } finally {
                setIsProcessing(false);
            }
        } else {
            alert('Please enter a url');
        }
    }
  
    return (
    <>
      <form onSubmit={handleShorten}>
        <input value={textInForm} placeholder="enter url" type="text" onChange={(e) => setTextInForm(e.target.value)}/>
        <button type="submit">Shorten</button>
      </form>
        <section>
            {isProcessing ? (
                <p>Shortening...</p>
            ) : (
                <p>Shortened URL: <a href={shortenedURL}>{shortenedURL}</a></p>
            )
            }
        </section>
    </>
    );
  }