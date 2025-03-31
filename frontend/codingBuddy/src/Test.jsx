import axios from 'axios';
import { useState } from 'react';

function Test() {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('54'); // Default: C++ (ID: 54)
    const [output, setOutput] = useState('');

    // Submit code to backend
    const submit = async () => {
        try {
            console.log(code)
            const res = await axios.post('http://localhost:3000/api/compiler/code', {
                sourceCode: code,
                languageId: language,
            });

            setOutput(res.data.stdout || res.data.stderr || res.data.message || 'No output received.');
        } catch (error) {
            console.error('Error:', error);
            setOutput('Error while executing the code.');
        }
    };

    return (
        <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Online Code Compiler</h2>

            {/* Language Selection */}
            <label>Select Language: </label>
            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px' }}
            >
                <option value="54">C++</option>
                <option value="71">Python</option>
                <option value="62">Java</option>
                <option value="63">JavaScript</option>
                <option value="50">C</option>
            </select>

            {/* Code Input */}
            <textarea
                rows="10"
                cols="50"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Write your code here..."
                style={{ display: 'block', marginBottom: '10px', padding: '10px' }}
            ></textarea>

            {/* Submit Button */}
            <button
                onClick={submit}
                style={{
                    padding: '10px 20px',
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                Run Code
            </button>

            {/* Output Section */}
            <div style={{ marginTop: '20px' }}>
                <h3>Output:</h3>
                <pre
                    style={{
                        backgroundColor: '#f4f4f4',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ddd',
                        color:"black"
                    }}
                >
                    {output || 'No output yet...'}
                </pre>
            </div>
        </div>
    );
}

export default Test;
