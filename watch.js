        let quantity = 1;

        function changeQuantity(change) {
            quantity = Math.max(1, quantity + change);
            document.getElementById('quantity').textContent = quantity;
        }

        function addToBag() {
            alert(`Added ${quantity} Elegant Luxury Watch(es) to your bag!`);
        }

        function signUp() {
            const email = prompt('Enter your email for 10% off your first purchase:');
            if (email) {
                alert(`Thank you! We've sent a 10% discount code to ${email}`);
            }
        }

        // Thumbnail functionality
        document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
            thumb.addEventListener('click', function() {
                // Remove active class from all thumbnails
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Change main image based on selection
                const mainWatch = document.getElementById('mainWatch');
                if (index % 2 === 0) {
                    // Gold/rose gold variant
                    mainWatch.style.background = "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><circle cx=\"100\" cy=\"100\" r=\"90\" fill=\"%23c9a876\" stroke=\"%234a4a4a\" stroke-width=\"4\"/><circle cx=\"100\" cy=\"100\" r=\"75\" fill=\"%23f4e4bc\" stroke=\"%234a4a4a\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"%234a4a4a\"/><circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"%23c9a876\"/><circle cx=\"100\" cy=\"100\" r=\"35\" fill=\"%234a4a4a\"/><circle cx=\"100\" cy=\"50\" r=\"8\" fill=\"%234a4a4a\"/><circle cx=\"150\" cy=\"100\" r=\"8\" fill=\"%234a4a4a\"/><circle cx=\"100\" cy=\"150\" r=\"8\" fill=\"%234a4a4a\"/><circle cx=\"50\" cy=\"100\" r=\"8\" fill=\"%234a4a4a\"/><line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"70\" stroke=\"white\" stroke-width=\"3\"/><line x1=\"100\" y1=\"100\" x2=\"130\" y2=\"100\" stroke=\"white\" stroke-width=\"2\"/></svg>') center/contain no-repeat";
                } else {
                    // Black variant
                    mainWatch.style.background = "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"><circle cx=\"100\" cy=\"100\" r=\"90\" fill=\"%232c3e50\" stroke=\"%23000\" stroke-width=\"4\"/><circle cx=\"100\" cy=\"100\" r=\"75\" fill=\"%2334495e\" stroke=\"%23000\" stroke-width=\"2\"/><circle cx=\"100\" cy=\"100\" r=\"60\" fill=\"%23000\"/><circle cx=\"100\" cy=\"100\" r=\"45\" fill=\"%232c3e50\"/><circle cx=\"100\" cy=\"100\" r=\"35\" fill=\"%23000\"/><circle cx=\"100\" cy=\"50\" r=\"8\" fill=\"%23fff\"/><circle cx=\"150\" cy=\"100\" r=\"8\" fill=\"%23fff\"/><circle cx=\"100\" cy=\"150\" r=\"8\" fill=\"%23fff\"/><circle cx=\"50\" cy=\"100\" r=\"8\" fill=\"%23fff\"/><line x1=\"100\" y1=\"100\" x2=\"100\" y2=\"70\" stroke=\"white\" stroke-width=\"3\"/><line x1=\"100\" y1=\"100\" x2=\"130\" y2=\"100\" stroke=\"white\" stroke-width=\"2\"/></svg>') center/contain no-repeat";
                }
            });
        });

        // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            const watchImage = document.getElementById('mainWatch');
            let rotation = 0;
            
            setInterval(() => {
                rotation += 0.5;
                watchImage.style.transform = `rotate(${rotation}deg)`;
            }, 100);
        });
