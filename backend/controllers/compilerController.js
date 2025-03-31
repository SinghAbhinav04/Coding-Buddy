const axios = require('axios');
const http = require('https');


// @route POST /api/compiler/run
const runCode = async (req, res) => {
    // Logic to execute user code
  };
  
  // @route POST /api/compiler/test
  const testCode = async (req, res) => {
    // Logic to run code with multiple test cases
  };
  
  // testing functionality



  const submitCode = async (req, res) => {
      const { sourceCode } = req.body;
  
      if (!sourceCode) {
          return res.status(400).json({ error: "Source code is required." });
      }
  
      const sourceCodeBase64 = Buffer.from(sourceCode, 'utf-8').toString('base64');
  
      const options = {
          method: 'POST',
          hostname: 'judge0-ce.p.rapidapi.com',
          port: null,
          path: '/submissions?base64_encoded=true&wait=true',
          headers: {
              'Content-Type': 'application/json',
              'x-rapidapi-key': '0da11db0f6msh5760272caeaf24cp1c3b6cjsn12b4df1f9ed5',
              'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
          },
      };
  
      const request = http.request(options, function (response) {
          const chunks = [];
  
          response.on('data', function (chunk) {
              chunks.push(chunk);
          });
  
          response.on('end', function () {
              try {
                  const body = Buffer.concat(chunks).toString();
                  const result = JSON.parse(body);
  
                  // Decode base64 output
                  if (result.stdout) {
                      result.stdout = Buffer.from(result.stdout, 'base64').toString('utf-8');
                  }
                  if (result.stderr) {
                      result.stderr = Buffer.from(result.stderr, 'base64').toString('utf-8');
                  }
  
                  res.json(result);
              } catch (error) {
                  console.error("Error processing response:", error);
                  res.status(500).json({ error: "Error processing response from Judge0." });
              }
          });
      });
  
      request.on('error', (error) => {
          console.error("Judge0 request error:", error);
          res.status(500).json({ error: "Failed to submit code to Judge0." });
      });
  
      request.write(
          JSON.stringify({
              source_code: sourceCodeBase64,
              language_id: 50, // C (50), change based on requirement
              stdin: '', // Optional input
          })
      );
  
      request.end();
  };
  

  module.exports = { runCode, testCode , submitCode};
  