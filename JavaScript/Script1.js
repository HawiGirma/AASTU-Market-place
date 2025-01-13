//Js applied to the footer indicating copyright and year of pubication.
const lastDiv = document.querySelector("footer div:last-child");
const newDiv = document.createElement("div");
newDiv.innerHTML = `
    <p class="currentYear">
        &copy; <span id="current-year"></span> My Website. All rights reserved.
    </p>
`;
lastDiv.after(newDiv);
const currentYearElement = document.getElementById("current-year");
currentYearElement.textContent = new Date().getFullYear();

//js applied to search btn.
const searchButton = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    alert(`You searched for: ${query}`);
    searchInput.value = "";
  } else {
    alert("Please enter a search query!");
  }
});
//js applied on footer incon links
document.querySelectorAll(".contacts a").forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault();
    alert(`Redirecting to: ${icon.href}`);
    window.open(icon.href, "_blank");
  });
});
//Js applied to drop down list
function DropdownActivator() {
  const lastDiv = document.querySelector(".bottom-line");
  const existingMenu = document.querySelector(".menu-container");

  if (!existingMenu) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("menu-container");
    newDiv.innerHTML = `
      <div class="sidebar">
        <div class="menu-item">
          <i class="fas fa-user"></i>
          <a
            class="menu-text"
            href="/Account Settings/AccountSetting page.html"
            >Manage My Account</a
          >
        </div>
        <div class="menu-item">
          <i class="fas fa-shopping-bag"></i>
          <a class="menu-text" href="/Cart Page/index.html">My Order</a>
        </div>
        <div class="menu-item">
          <i class="fas fa-star"></i>
          <a class="menu-text" href="/Product-details Page/product details.html">My Reviews</a>
        </div>
        <div class="menu-item">
          <i class="fas fa-sign-out-alt"></i>
          <a class="menu-text" href="/Sign up page/signup.html">Logout</a>
        </div>
      </div>
    `;
    if (lastDiv) {
      lastDiv.after(newDiv);
      newDiv.style.display = "none";
      newDiv.style.display = "flex";
      newDiv.style.flexDirection = "column";
      newDiv.style.justifyItems = "flex-end";

      // Prevent dropdown from disappearing on hover over links
      newDiv.addEventListener("mouseover", () => {
        newDiv.style.display = "grid";
      });

      // Only hide dropdown onmouseout if not hovering over a child element
      newDiv.addEventListener("mouseout", (event) => {
        if (
          !event.relatedTarget ||
          !event.relatedTarget.closest(".menu-container")
        ) {
          newDiv.style.display = "none";
        }
      });
    }
  }
}

const AccountSetting = document.getElementById("AccountSetting");
if (AccountSetting) {
  AccountSetting.addEventListener("mouseover", () => {
    DropdownActivator();
    const menu = document.querySelector(".menu-container");
    if (menu) {
      menu.style.display = "block";
    }
  });

  // No need for mouseout event on AccountSetting, handled by menu container
}
//contact us page Form validation (Contact Us page example placeholder)
function validateContactForm() {
  const emailField = document.querySelector('input[name="email"]');
  if (!emailField.value.includes("@")) {
    alert("Please enter a valid email address.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

//Js added on home Page
const dots = document.querySelectorAll(".dots span");
const bannerContainer = document.querySelector(".banner");
const images = [
  "/Assets/playstation-5.png", // Replace with actual image paths // Add the third image path
  "/Assets/Mac.svg",
];

// Set the default active dot and banner image
window.onload = () => {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[0].classList.add("active");
  bannerContainer.style.backgroundImage = `url(${images[0]})`;
  bannerContainer.style.backgroundSize = "cover";
  bannerContainer.style.backgroundPosition = "center";
  document.querySelector(".banner-image").style.display = "none";
  document.getElementById("text1").innerHTML = "PS5 Pro Series";
  document.querySelector(".banner").style.alignItems = "flex-end";
  document.getElementById("appleLogo").style.display = "none";
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // Remove active class from all dots
    dots.forEach((dot) => dot.classList.remove("active"));

    // Add active class to the clicked dot
    dot.classList.add("active");

    // Update the banner image based on the clicked dot
    if (index === 0) {
      bannerContainer.style.backgroundImage = `url(${images[0]})`;
      document.querySelector(".banner-image").style.display = "none";
      document.getElementById("text1").innerHTML = "PS5 Pro Series";
      document.querySelector(".banner").style.alignItems = "flex-end";
      document.getElementById("appleLogo").style.display = "none";
    } else if (index === 1) {
      bannerContainer.style.background = "black";
      document.querySelector(".banner-image").style.display = "block";
      document.getElementById("text1").innerHTML = "Iphone Series";
      document.getElementById("appleLogo").style.display = "block";
      document.querySelector(".banner").style.alignItems = "center";
    } else if (index === 2) {
      bannerContainer.style.backgroundImage = `url(${images[1]})`;
      document.querySelector(".banner-image").style.display = "none";
      document.getElementById("text1").innerHTML = "MacBook Series";
      document.getElementById("appleLogo").style.display = "block";
      document.querySelector(".banner").style.alignItems = "center";
    }

    bannerContainer.style.backgroundSize = "cover";
    bannerContainer.style.backgroundPosition = "center";
    dot.preventDefault();
  });
});
