document.addEventListener('DOMContentLoaded', function () {
      const searchInput = document.querySelector('.nav-icons input');
      const searchResults = document.createElement('div');
      searchResults.className = 'search-results';
      searchInput.parentElement.appendChild(searchResults);

      // Sample product data (replace with your actual data)
      const products = [
            { name: 'Spring Blossom Bouquet', price: 45.00, image: './assets/images/spring-blossom.jpg' },
            { name: 'Elegant Floral Garland', price: 35.00, image: './assets/images/garland.jpg' },
            { name: 'Rose & Lily Bouquet', price: 55.00, image: './assets/images/rose-lily.jpg' },
            // Add more products as needed
      ];

      searchInput.addEventListener('input', debounce(function (e) {
            const searchTerm = e.target.value.toLowerCase();

            if (searchTerm.length < 2) {
                  searchResults.classList.remove('active');
                  return;
            }

            const filteredProducts = products.filter(product =>
                  product.name.toLowerCase().includes(searchTerm)
            );

            if (filteredProducts.length > 0) {
                  searchResults.innerHTML = filteredProducts.map(product => `
                <div class="search-item" onclick="window.location.href='#'">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="search-item-details">
                        <h4>${product.name}</h4>
                        <p>$${product.price.toFixed(2)}</p>
                    </div>
                </div>
            `).join('');
                  searchResults.classList.add('active');
            } else {
                  searchResults.innerHTML = '<div class="search-item">No products found</div>';
                  searchResults.classList.add('active');
            }
      }, 300));

      // Close search results when clicking outside
      document.addEventListener('click', function (e) {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                  searchResults.classList.remove('active');
            }
      });

      // Debounce function to limit API calls
      function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                  const later = () => {
                        clearTimeout(timeout);
                        func(...args);
                  };
                  clearTimeout(timeout);
                  timeout = setTimeout(later, wait);
            };
      }
});