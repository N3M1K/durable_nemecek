document.addEventListener("DOMContentLoaded", function() {
  var questions = document.querySelectorAll('.question');
  questions.forEach(function(question) {
    question.addEventListener('click', function() {
      var answer = this.nextElementSibling;
      if (!answer.classList.contains('slide-down')) {
        answer.classList.add('slide-down');
        this.querySelector('img').style.transform = 'scaleY(-1)';
      } else {
        answer.classList.remove('slide-down');
        this.querySelector('img').style.transform = 'scaleY(1)';
      }
    });
  });
});





// Získání referencí na prvky
var modal = document.getElementById("myModal");
var modalContent = document.querySelectorAll(".modal-content");
var closeBtn = document.getElementsByClassName("close")[0];

// Otevření modálního okna po kliknutí na tlačítko
function openModal() {
  modal.style.display = "block";
}

// Zavření modálního okna po kliknutí na tlačítko pro zavření
function closeModal() {
  modal.style.display = "none";
}


document.addEventListener("DOMContentLoaded", function() {
    var questions = document.querySelectorAll('.question');
    questions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (!answer.classList.contains('slide-down')) {
                answer.classList.add('slide-down');
                this.querySelector('img').style.transform = 'scaleY(-1)';
            } else {
                answer.classList.remove('slide-down');
                this.querySelector('img').style.transform = 'scaleY(1)';
            }
        });
    });

    // Získání referencí na prvky
    var modal = document.getElementById("myModal");
    var modalContent = document.querySelector(".modal-content");
    var closeBtn = document.getElementsByClassName("close")[0];

    // Otevření modálního okna po kliknutí na tlačítko
    function openModal() {
        modal.style.display = "block";
    }

    // Zavření modálního okna po kliknutí na tlačítko pro zavření
    function closeModal() {
        modal.style.display = "none";
    }

    // Přidání posluchačů událostí na tlačítka cen
    document.querySelector(".prices #basic").addEventListener('click', function() {
        modalContent.innerHTML = `
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>Basic Coverage</h2>
                <p>Capture thrilling moments in street races with our Basic Coverage package. This package offers fast, exciting, and dynamic photography to bring your street racing experiences to life.</p>
                <h3>Price: $50 per race</h3>
                <ul>
                    <li>Fast</li>
                    <li>Exciting</li>
                    <li>Dynamic</li>
                </ul>
            `;
        openModal();
    });

    document.querySelector(".prices #premium").addEventListener('click', function() {
        modalContent.innerHTML = `
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>Premium Coverage</h2>
                <p>Enhanced photography package for street racing events. This package offers high-quality coverage of your races, ensuring every action-packed moment is captured with precision. With customizable options, you can tailor the coverage to meet your specific needs and preferences.</p>
                <h3>Price: $100 per race</h3>
                <ul>
                    <li>High-quality</li>
                    <li>Action-packed</li>
                    <li>Customizable</li>
                </ul>
            `;
        openModal();
    });

    document.querySelector(".prices #full-time").addEventListener('click', function() {
        modalContent.innerHTML = `
                <span class="close" onclick="closeModal()">&times;</span>
                <h2>Full Day Coverage</h2>
                <p>Comprehensive photography service for a full day of street racing. Our Full Day Coverage package provides extensive, exclusive, and unlimited photography to capture every moment of your street racing event.</p>
                <h3>Price: $200 per race</h3>
                <ul>
                    <li>Extensive</li>
                    <li>Exclusive</li>
                    <li>Unlimited</li>
                </ul>
            `;
        openModal();
    });
});





document.addEventListener('DOMContentLoaded', function() {
  var animatedShadow = document.getElementById('animated-shadow');

  document.addEventListener('mousemove', function(event) {
    var distance = getDistance(event.clientX, event.clientY, animatedShadow);
    if (distance <= 8) {
      animatedShadow.classList.add('no-shadow');
    } else {
      animatedShadow.classList.remove('no-shadow');
    }
  });

  document.addEventListener('mouseleave', function() {
    animatedShadow.classList.remove('no-shadow');
  });

  function getDistance(x, y, element) {
    var rect = element.getBoundingClientRect();
    var centerX = rect.left + rect.width / 2;
    var centerY = rect.top + rect.height / 2;
    return Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
  }
});
