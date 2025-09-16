
        import products from "./data.js";

        const chatbox = document.getElementById("chatbox");
        const userInput = document.getElementById("userInput");

        function addMessage(sender, text) {
          const msg = document.createElement("div");
          msg.className = sender;
          msg.textContent = `${sender}: ${text}`;
          chatbox.appendChild(msg);
          chatbox.scrollTop = chatbox.scrollHeight;
        }

        function sendMessage() {
          const text = userInput.value.trim();
          if (!text) return;
          addMessage("user", text);
          userInput.value = "";

          // process user input
          handleBotReply(text);
        }

        function handleBotReply(message) {
          message = message.toLowerCase();

          let found = false;
          for (const [product, details] of Object.entries(products)) {
            if (message.includes(product.toLowerCase())) {
              let reply = `${product} available sizes: ${details.sizes.join(", ")}.\nPrices:\n`;
              for (const [size, price] of Object.entries(details.prices)) {
                reply += `- ${size}: ${price}\n`;
              }
              addMessage("bot", reply.trim());
              found = true;
              break;
            }
          }

          if (!found) {
            addMessage("bot", "Sorry, I don’t have that information.");
          }
        }