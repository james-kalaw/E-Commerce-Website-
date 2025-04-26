// Primary Modal Elements
const modal = document.getElementById("product-modal");
const closeBtn = document.querySelector(".close-btn");

// Secondary Modal Elements
const secondaryModal = document.getElementById("secondary-modal");
const secondaryCloseBtn = document.querySelector(".secondary-close-btn");

// "Buy Now" Button
const buyNowBtn = document.getElementById("buy-now-btn");

// Elements inside modal
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-price");
const modalDiscount = document.getElementById("modal-discount");
const modalDescription = document.getElementById("modal-description");

// Payment Process Modal Elements
const paymentProcessModal = document.getElementById("payment-process-modal");
const paymentProcessCloseBtn = document.querySelector(".payment-process-close-btn");

// "Proceed To Payment" Button
const confirmPurchaseBtn = document.getElementById("confirm-purchase-btn");

// Success Modal Elements
const transactionSuccessModal = document.getElementById("transaction-success-modal");
const transactionSuccessCloseBtn = document.querySelector(".transaction-success-close-btn");

// Buttons in Success Modal
const downloadProductBtn = document.getElementById("download-product-btn");
const updatePlanBtn = document.getElementById("update-plan-btn");

// Close Success Modal
transactionSuccessCloseBtn.addEventListener("click", () => {
    transactionSuccessModal.classList.add("hidden");
});

// Mock Product Details
const productDetails = {
  "product1": {
    image: "products1/microsoft.png",
    price: "Price: $15",
    description: "Microsoft Office 365 is a comprehensive cloud-based productivity suite offered by Microsoft. It provides a range of tools designed to enhance collaboration, communication, and productivity. Key features include core Office apps like Word, Excel, and PowerPoint, email and calendar management, team collaboration with Microsoft Teams, cloud storage with OneDrive, and advanced security features to protect sensitive data."
  },
  "product2": {
    image: "products1/google.png",
    price: "Price: $18",
    description: "Google Workspace is a suite of cloud-based productivity tools from Google. It offers a user-friendly interface and seamless integration between applications, making it a popular choice for individuals and businesses. Key features include email and calendar management with Gmail and Google Calendar, document creation and editing with Google Docs, Sheets, and Slides, cloud storage with Google Drive, video conferencing with Google Meet, and team communication with Google Chat."
  },
  "product3": {
    image: "products1/zoom.png",
    price: "Price: $14",
    description: "Zoom is a popular video conferencing platform that enables real-time communication through video, audio, and chat. It offers a range of features to facilitate remote work and collaboration, including high-quality video conferencing with screen sharing and recording capabilities, audio conferencing, webinars, virtual backgrounds, and a mobile app for on-the-go access."
  },
  "product4": {
    image: "products1/slack.png",
    price: "Price: $8",
    description: "Slack is a team communication and collaboration tool that helps teams connect and work efficiently. It offers a variety of features to streamline communication and improve productivity, such as channels for organized conversations, direct messaging, file sharing, integrations with other apps, and a powerful search function."
  },
  "product5": {
    image: "products1/dropbox.png",
    price: "Price: $19",
    description: "Dropbox is a cloud storage service that allows you to store and share files securely. It offers a user-friendly interface and robust features for both personal and professional use, including file storage, file sharing, version history, file sync and backup, and team collaboration."
  },
  "product6": {
    image: "products1/trello.png",
    price: "Price: $10",
    description: "Trello is a visual project management tool that helps teams organize and prioritize tasks. It uses a Kanban-style interface to visualize workflows and track progress, with features like boards, lists, and cards for task organization, drag-and-drop functionality for easy task updates, checklists, due dates and reminders, and integrations with other tools."
  },
  "product7": {
    image: "products2/adobe.png",
    price: "Price: $33",
    description: "Adobe Creative Cloud is a comprehensive suite of creative software tools for designers, photographers, and video editors. It includes industry-standard apps like Photoshop, Illustrator, InDesign, Premiere Pro, and After Effects, offering powerful features for image editing, graphic design, web design, video editing, and more."
  },
  "product8": {
    image: "products2/canva.jpg",
    price: "Price: $12",
    description: "Canva is a user-friendly design platform that empowers individuals and teams to create stunning visuals without advanced design skills. It offers a drag-and-drop interface, a vast library of templates, and a wide range of design elements, making it suitable for creating social media graphics, presentations, posters, and other visual content."
  },
  "product9": {
    image: "products2/coral.jpg",
    price: "Price: $34",
    description: "CorelDRAW is a vector graphics editor used to create illustrations, logos, and other graphic designs. It offers a comprehensive set of tools for drawing, editing, and manipulating vector objects and a wide range of features for typography, color management, and print production."
  },
  "product10": {
    image: "products2/figma.png",
    price: "Price: $12",
    description: "Figma is a collaborative design tool that enables teams to work together in real-time on web and mobile designs. It offers a user-friendly interface, powerful vector graphics capabilities, and a wide range of prototyping and design system features."
  },
  "product11": {
    image: "products2/capcut.png",
    price: "Price: $9",
    description: "CapCut is a versatile video editing app that allows users to create professional-quality videos on their mobile devices. It offers a range of features, including video trimming, merging, speed adjustment, adding text and music, and applying visual effects and filters."
  },
  "product12": {
    image: "products2/picsart.jpg",
    price: "Price: $11",
    description: "PicsArt is a photo and video editing app that provides a wide range of tools for creative expression. It offers features like photo editing, collage making, drawing, and video editing, allowing users to create unique and artistic content."
  },
  "product13": {
    image: "products3/spotify.png",
    price: "Price: $9",
    description: "Spotify is a popular music streaming service that provides access to millions of songs and podcasts. It offers personalized playlists tailored to your listening habits, offline listening for enjoyment without an internet connection, and high-quality audio for an immersive listening experience."
  },
  "product14": {
    image: "products3/netflix.png",
    price: "Price: $19",
    description: "Netflix is a leading streaming service that offers a vast library of movies and TV shows, including original series and films. It provides high-quality streaming, personalized recommendations to discover new content, and multiple-screen viewing so you can watch on different devices at the same time."
  },
  "product15": {
    image: "products3/crunchyroll.png",
    price: "Price: $9",
    description: "Crunchyroll is a popular streaming service for anime and manga. It offers a wide range of anime titles, including simulcasts of the latest shows, as well as a library of classic anime. Crunchyroll provides features like HD streaming, customizable video settings, and community features to connect with other anime fans."
  },
  "product16": {
    image: "products3/prime.jpg",
    price: "Price: $15",
    description: "Prime Video is a streaming service that offers a vast library of movies and TV shows, including Amazon Originals. It also offers live sports, rental and purchase options for the latest releases, and 4K Ultra HD streaming for a stunning visual experience."
  },
  "product17": {
    image: "products3/disney.jpg",
    price: "Price: $10",
    description: "Disney+ is a streaming service that offers a wide range of content from Disney, Pixar, Marvel, Star Wars, and National Geographic. It provides a family-friendly experience with a vast library of movies, TV shows, and original series. Disney+ also offers features like multiple user profiles, parental controls, and the ability to download content for offline viewing."
  },
  "product18": {
    image: "products3/espn.png",
    price: "Price: $9",
    description: "ESPN is a sports streaming service that offers live sports, original programming, and on-demand content. It provides access to a variety of sports, including baseball, basketball, soccer, and hockey. ESPN+ also offers exclusive original series, expert analysis, and fantasy sports tools."
  },
  "product19": {
    image: "products4/aws.jpg",
    price: "Price: $5",
    description: "Amazon Web Services (AWS) is a comprehensive cloud computing platform that offers a wide range of services, including computing power, database storage, content delivery, and more. It empowers businesses to scale their applications and infrastructure, reduce costs, and innovate faster."
  },
  "product20": {
    image: "products4/cloud.png",
    price: "Price: $3",
    description: "Google Cloud is a suite of cloud computing services that leverages Google's advanced technology to provide reliable, scalable, and high-performance solutions. It offers a range of services, including data analytics, machine learning, and infrastructure as a service, helping businesses modernize their operations and drive innovation."
  },
  "product21": {
    image: "products4/azure.png",
    price: "Price: $6",
    description: "Microsoft Azure is a cloud computing platform that provides a comprehensive set of cloud services, including computing, storage, networking, and analytics. It enables businesses to build, deploy, and manage applications across multiple data centers, ensuring high availability and performance."
  },
  "product22": {
    image: "products4/norton.jpg",
    price: "Price: $19",
    description: "Norton is a leading cybersecurity company that offers a range of security solutions to protect individuals and businesses from cyber threats. Its products include antivirus software, firewall protection, and identity theft protection, helping users safeguard their digital lives."
  },
  "product23": {
    image: "products4/mcafee.jpg",
    price: "Price: $29",
    description: "McAfee is a cybersecurity company that provides a range of security solutions for individuals and businesses. It offers antivirus software, firewall protection, and identity theft protection, as well as advanced threat protection to safeguard against emerging cyber threats."
  },
  "product24": {
    image: "products4/bitdefender.jpg",
    price: "Price: $29",
    description: "Bitdefender is a cybersecurity company that provides a range of security solutions for individuals and businesses. It offers antivirus software, firewall protection, and anti-malware protection, as well as advanced threat detection and response capabilities to keep devices secure."
  },
  "product25": {
    image: "products5/shopify.png",
    price: "Price: $10",
    description: "Shopify is a popular e-commerce platform that empowers businesses of all sizes to create and manage online stores. It offers a user-friendly interface, customizable templates, and a wide range of features, including payment processing, shipping, and marketing tools. With Shopify, businesses can easily sell products online, track inventory, manage orders, and analyze sales data."
  },
  "product26": {
    image: "products5/wix.png",
    price: "Price: $25",
    description: "Wix Studio is a professional website builder that offers advanced customization options for creating high-quality websites. It provides a drag-and-drop interface, a vast library of templates, and a range of features, including SEO tools, e-commerce capabilities, and marketing integrations. Wix Studio is ideal for web designers and developers who want to create unique and sophisticated websites."
  },
  "product27": {
    image: "products5/bigcommerce.png",
    price: "Price: $39",
    description: "BigCommerce is a powerful e-commerce platform designed to scale with your business. It offers a range of features, including advanced product catalogs, robust SEO tools, and seamless integration with shipping carriers and payment gateways. BigCommerce is suitable for businesses of all sizes, from small startups to large enterprises."
  },
  "product28": {
    image: "products5/squarespace.png",
    price: "Price: $23",
    description: "Squarespace is a popular website builder that combines beautiful design with powerful features. It offers a user-friendly interface, a wide range of templates, and advanced customization options. Squarespace is ideal for creating stylish and professional websites, including online stores, portfolios, and blogs."
  },
  "product29": {
    image: "products5/woocommerce.png",
    price: "Price: $5",
    description: "WooCommerce is a popular e-commerce plugin for WordPress, that allows you to turn your WordPress website into an online store. It offers a wide range of features, including product management, payment processing, shipping, and marketing tools. WooCommerce is highly customizable and integrates seamlessly with other WordPress plugins and themes."
  },
  "product30": {
    image: "products5/weebly.png",
    price: "Price: $12",
    description: "Weebly is a user-friendly website builder that offers a drag-and-drop interface and a wide range of templates. It's suitable for creating various types of websites, including online stores, portfolios, and blogs. Weebly offers easy-to-use tools for customizing your website's design and adding features like contact forms, maps, and social media integration."
  },

};

// Select all products
const products = document.querySelectorAll(".product-item");

// Add event listeners to each product
products.forEach((product) => {
  product.addEventListener("click", () => {
    const productId = product.id; // Get the product ID
    const details = productDetails[productId]; // Retrieve product details

    // Modal with product details
    modalImage.src = details.image;
    modalPrice.textContent = details.price || "$0";
    modalDescription.textContent = details.description || "Description not available.";

    // Show modal
    modal.classList.remove("hidden");
  });
});

// Close modal functionality
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Clicking "Buy Now" to open Secondary Modal
buyNowBtn.addEventListener("click", () => {
  modal.classList.add("hidden"); // Hide the primary modal
  secondaryModal.classList.remove("hidden"); // Show the secondary modal
});

// Close Secondary Modal
secondaryCloseBtn.addEventListener("click", () => {
  secondaryModal.classList.add("hidden");
});

// Close modal if clicked outside
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
  if (event.target === secondaryModal) {
    secondaryModal.classList.add("hidden");
  }
});

// Clicking "Proceed To Payment" to open Payment Process Modal
confirmPurchaseBtn.addEventListener("click", () => {
    secondaryModal.classList.add("hidden"); // Hide the payment options modal
    paymentProcessModal.classList.remove("hidden"); // Show the payment process modal
  });
  
  // Close Payment Process Modal
  paymentProcessCloseBtn.addEventListener("click", () => {
    paymentProcessModal.classList.add("hidden");
  });

// Trigger Actions in Success Modal
downloadProductBtn.addEventListener("click", () => {
    alert("Downloading On Progress!");
});

updatePlanBtn.addEventListener("click", () => {
    alert("Subscription Updated!");
});

// Open Success Modal after Payment
document.getElementById("payment-form").addEventListener("submit", (event) => {
    event.preventDefault();
    paymentProcessModal.classList.add("hidden");
    transactionSuccessModal.classList.remove("hidden");
});


// Cart elements
const cartModal = document.getElementById("cart-modal");
const cartCloseBtn = document.getElementById("cart-close-btn");
const cartIcon = document.querySelector(".fa-cart-shopping");
const cartItemsContainer = document.getElementById("cart-items-container");
const checkoutBtn = document.getElementById("checkout-btn");

let cartItems = []; // Array to store cart items

// Add to Cart functionality
const addToCartBtn = document.getElementById("add-to-cart-btn");
addToCartBtn.addEventListener("click", () => {
    const productId = modalImage.src; // Using image URL as unique identifier
    const productName = modalDescription.textContent;
    const productPrice = modalPrice.textContent;

    // Check if item already exists in the cart
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        alert("This item is already in your cart!");
        return;
    }

    // Add new item to the cart
    cartItems.push({
        id: productId,
        name: productName,
        price: productPrice,
        image: modalImage.src,
    });

    alert("Item added to cart!");
    modal.classList.add("hidden"); // Close the product modal
});

// Open Cart Modal
cartIcon.addEventListener("click", () => {
    updateCartModal();
    cartModal.classList.remove("hidden");
});

// Close Cart Modal
cartCloseBtn.addEventListener("click", () => {
    cartModal.classList.add("hidden");
});

// Update Cart Modal with items
function updateCartModal() {
    cartItemsContainer.innerHTML = ""; // Clear previous content

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartItems.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <input type="checkbox" class="select-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}">
            <p>${item.price}</p>
            <button class="remove-item-btn" data-id="${item.id}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll(".remove-item-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const itemId = e.target.dataset.id;
            cartItems = cartItems.filter(item => item.id !== itemId); // Remove item
            updateCartModal(); // Update cart modal
        });
    });
}

// Proceed to Checkout
checkoutBtn.addEventListener("click", () => {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    cartModal.classList.add("hidden"); // Hide the cart modal
    secondaryModal.classList.remove("hidden"); // Show the "Choose an Online Payment Platform" modal
});

// Close Secondary Modal
secondaryCloseBtn.addEventListener("click", () => {
    secondaryModal.classList.add("hidden");
});


// Account Modal 
document.addEventListener('DOMContentLoaded', () => {
    const userGear = document.getElementById('user-gear');
    const accountModal = document.getElementById('accountModal');
    const editProfileModal = document.getElementById('editProfileModal');
    const editProfileButton = document.getElementById('editProfileButton');
    const saveChangesButton = document.getElementById('saveChangesButton');
    const closeButtons = document.querySelectorAll('.close-button');

    // Open Account Modal
    userGear.addEventListener('click', () => {
        accountModal.style.display = 'flex';
    });

    // Open Edit Profile Modal
    editProfileButton.addEventListener('click', () => {
        accountModal.style.display = 'none';
        editProfileModal.style.display = 'flex';
    });

    // Save Changes
    saveChangesButton.addEventListener('click', () => {
        // Get values from the edit profile inputs
        const username = document.getElementById('editUsername').value;
        const fullname = document.getElementById('editFullname').value;
        const email = document.getElementById('editbio').value;
        const phone = document.getElementById('editPhone').value;

        // Update the values in the Account Modal
        document.getElementById('username').textContent = username;
        document.getElementById('fullname').textContent = fullname;
        document.getElementById('email').textContent = email;
        document.getElementById('phone').textContent = phone;

        // Close the Edit Profile Modal and show the Account Modal
        editProfileModal.style.display = 'none';
        accountModal.style.display = 'flex';
    });

    // Close Modals
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            accountModal.style.display = 'none';
            editProfileModal.style.display = 'none';
        });
    });
});

