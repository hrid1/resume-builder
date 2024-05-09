// script.js
document
  .getElementById("resume-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve user input from the form
    const name = document.getElementById("user-name").value;
    const phone = document.getElementById("contactInfo").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const profession = document.getElementById("profession").value;
    const bioInfo = document.getElementById("profile-info").value;
    const workexp = document.getElementById("workExperience").value;
    const university = document.getElementById("university").value;
    // const degree = document.getElementById('degree').value;
    const education = document.getElementById("education").value;
    // const year = document.getElementById('year').value;
    // Retrieve other input fields as needed

    // Retrieve skills
    const skills = [];
    document
      .querySelectorAll('#skills-section input[name="skill"]')
      .forEach((input) => {
        skills.push(input.value);
      });
    // Retrieve Project---------------------
    const projects = [];
    document
      .querySelectorAll('#projects-section input[name="project"]')
      .forEach((input) => {
        projects.push(input.value);
      });

    console.log(projects);

    // Retrieve profile picture
    const profilePic = document.getElementById("profile-pic").files[0];
    let profilePicUrl = "";
    if (profilePic) {
      // Create a URL for the uploaded image
      profilePicUrl = URL.createObjectURL(profilePic);
    }

    // skill set hr
    let skillSet = `<ul> `;
    skills.forEach((skill) => {
      skillSet += `  <li class="flex items-center gap-2">
      <span class="material-symbols-outlined"> album </span>
      <span class="text-lg font-semibold mb-2"> ${skill}</span>
    </li>`;
    });
    skillSet += `</ul>`;

    // project set hr
    let projectSet = `<ul> `;
    projects.forEach((project) => {
      projectSet += `  <li class="flex items-center gap-2">
      <span class="material-symbols-outlined"> rocket_launch </span>
      <span class="text-lg font-semibold mb-4"> ${project}</span>
    </li>`;
    });
    projectSet += `</ul>`;

    // Add profile picture to the resume
    //  let himg = ``;
    //  if (profilePicUrl) {

    //   himg += `<img src="${profilePicUrl}" alt="Profile Picture" class="mb-4 w-8 h-8 rounded-full">`;
    // }

    // Generate HTML content for the resume based on the input
    // let resumeContent = `
    // <img src="${profilePicUrl}" alt="Profile Picture" class="mb-4 w-8 h-8 rounded-full">
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Education:</strong></p>
    //     <ul>

    //         <li><strong>education:</strong> ${education}</li>

    //     </ul>
    //     <p><strong>Skills:</strong>
    //     ${skillSet}
    //     </p>
    //     <ul>
    // `;

    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    let resumeContent = `
    
    <div class="resume-container ">
      <div
        class="w-11/12 mx-auto flex justify-around gap-4 border shadow-md my-4"
      >
        <!-- left side -->
        <div class="w-2/5' bg-green-100 p-2">
          <div class="mb-6 w-full mr-4">
            <img
              src="${profilePicUrl}"
              alt="Profile Picture"
              class="ml-4 w-40 h-40 border rounded-full profile-pic"
            />
            <h1 class="text-4xl font-bold m-2 uppercase text-slate-900">
              ${name}
            </h1>
            <h3 class="text-2xl m-2 text-gray-600">${profession}</h3>
          </div>
          <hr
            class="w-1/3 h-1.5 rounded bg-blue-200 mb-4 text-center mx-auto"
          />
          <div class="mb-6">
            <h2 class="text-xl font-bold uppercase text-blue-800">Profile</h2>
            <p class="text-gray-700">
             ${bioInfo}
            </p>
          </div>
          <hr
            class="w-1/3 h-1.5 rounded bg-blue-200 mb-4 text-center mx-auto"
          />
          <div class="mb-6">
            <h2 class="text-xl  uppercase text-blue-800 font-bold">
              Contact Info
            </h2>
            <ul class="mt-2 list-inside px-1">
              <li class="flex gap-2">
                <span class="material-symbols-outlined"> call </span>
                <span class="font-semibold" >Mobile: ${phone}</span>
              </li>
              <li class="flex gap-2">
                <span class="material-symbols-outlined"> email </span>
                <span class="font-semibold">Email: ${email}</span>
              </li>
              <li class="flex gap-2">
                <span class="material-symbols-outlined"> home </span>
                <span class="font-semibold">Address: ${address} </span>
              </li>
              <li class="flex gap-2">
                <span class="material-symbols-outlined"> rss_feed </span>
                <span class="font-semibold">Linkdin: ${website}</span>
              </li>
             
            </ul>
          </div>
          <hr
            class="w-1/3 h-1.5 rounded bg-blue-200 mb-4 text-center mx-auto"
          />
          <div class="mb-6">
            <h2 class="text-xl uppercase font-bold text-blue-800">
              Language
            </h2>
           <div class="m-1 flex gap-2">
           <span class="material-symbols-outlined"> globe
</span>
           <p class="font-semibold">Bangla</p>
           <span class="material-symbols-outlined"> globe
</span>
           <p class="font-semibold">English</p>
           </div>
          </div>

          <hr
          class="w-1/3 h-1.5 rounded bg-blue-200 mb-4 text-center mx-auto"
        />
          <div class="mb-6">
            <h2 class="text-xl uppercase font-bold text-blue-800">
              Soft Skill
            </h2>

            <ul class="list-disc list-inside p-2">
           
           
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined"> deployed_code </span>
              <span class=" font-semibold"> Problem solving</span>
            </li>
            <li class="flex items-center gap-2">
              <span class="material-symbols-outlined"> deployed_code </span>
              <span class="font-semibold"> Time management</span>
            </li>
            
          </ul>
           
          </div>
        </div>

        <!-- right side -->
        <div class="w-3/5 mt-5">
          <div class="mb-6">
            <h2
              class="text-xl uppercase font-bold text-blue-800 mb-2"
            >
              Education
            </h2>
            <p class="text-gray-700 font-semibold"><span>${education}</span></p>
            <p class="text-gray-700">${university}</p>
          </div>
          <hr
            class="w-1/3 h-1.5 rounded bg-blue-200 mb-4 text-center mx-auto"
          />
          <div class="mb-6">
            <h2 class="text-xl font-bold uppercase text-blue-800">Skills</h2>
            ${skillSet}
          </div>
          <hr
            class="w-1/3 h-1.5 rounded bg-blue-200 mb-4 text-center mx-auto"
          />
          <div>
            <h2 class="text-xl font-bold uppercase text-blue-800">
              Experience
            </h2>
            <div class="my-2">
              <p>${workexp}</p>
            </div>
          </div>
          <hr
            class="w-1/3 h-1.5 rounded bg-blue-200 mb-4 text-center mx-auto"
          />
          <div>
            <h2 class="text-xl font-bold uppercase text-blue-800">Projects</h2>
            <div class="my-2">
              ${projectSet}
            </div>
          </div>
        </div>
      </div>
    </div>

    `;

    // ------------------------------------------------------------------
    // ------------------------------------------------------------------

    // Add more resume content based on user input

    // Display the generated resume on the webpage
    document.getElementById("resume-content").innerHTML = resumeContent;
    document.getElementById("resume-preview").classList.remove("hidden");
    document.getElementById("resume-form").classList.add("hidden");
    document.getElementById("download-btn").classList.remove("hidden")
  });

// Add skill functionality
document.getElementById("add-skill").addEventListener("click", function () {
  const skillsSection = document.getElementById("skills-section");
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("mb-4");
  skillDiv.innerHTML = `
       
        <input type="text" name="skill" class="text-gray-800 w-11/12 border rounded px-4 py-2 ">
       
    `;
  skillsSection.appendChild(skillDiv);
});

// Add Project functionality hr
document.getElementById("add-project").addEventListener("click", function () {
  const projectSection = document.getElementById("projects-section");
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("mb-4");
  projectDiv.innerHTML = `
    
      <input type="text" name="project" class="text-gray-800 w-11/12 border rounded px-4 py-2 ">
  
  `;
  projectSection.appendChild(projectDiv);
});



// Print functionality
document.getElementById("print-button").addEventListener("click", function () {
  // document.getElementById('print-button').classList.add('hidden');
  document.getElementById("header-id").classList.add("hidden");
  document.getElementById("footer-id").classList.add("hidden");
  window.print();
});
