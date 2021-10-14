document.querySelector('#my-name').innerHTML = `${data.first_name} <span class="color-grey">${data.last_name}</span>`;
document.querySelector('.job-title').textContent = data.job_title;
document.querySelector('.profile-data').textContent = data.profile;
/**
 * section data
 */
let expirienceData = '';
experience.forEach(item => {
    expirienceData += `<section class="mb-5">`;
    expirienceData += ` <h4 class="company-name mb-2">${item.company} - ${item.city}, <i>${item.from} - ${item.to}</i></h4>`;
    expirienceData += `<h5>${item.position}</h5>`;
    expirienceData += `<p>${item.description}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 */
const formatPhone = (phone) => {
    let phoneStr = phone.substring(0,4) + 
        ' (' + phone.substring(4,6) + ') ' + 
        phone.substring(6,9) + '-' + 
        phone.substring(9,11) + '-' + phone.substring(11,13);
    return phoneStr;
}
const imgTemplate = (img) => {
    let imgSrc = `<span class="icon" style="-webkit-mask: url('${img}') no-repeat center; mask: url('${img}') no-repeat center"></span>`;
    return imgSrc;
}

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone}">${formatPhone(data.phone) + imgTemplate(data.phone_icon)}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email}">${data.email + imgTemplate(data.email_icon)}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="callto:${data.skype}">${data.skype_name + imgTemplate(data.skype_icon)}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin}">${data.linkedin_name + imgTemplate(data.linkedin_icon)}</a></li>`
document.querySelector('.address').innerHTML = `<p>${data.address}</p>`;
document.querySelector('#my-photo').src = data.photo;

/**
 * skills
 */

let skillsData = '';
data.skills.forEach(item => {
    skillsData += `<li>${item}</li>`;
});
document.querySelector('.skills-list').innerHTML = skillsData;

/**
 * education
 */

let educationData = '';
data.education.forEach(item => {
    educationData += `<li>${item[0]}, ${item[1]}</li>`;
});
document.querySelector('.education-list').innerHTML = educationData;

/**
 * Achievements
 */

let achievementsData = '';
data.achievements.forEach(item => {
    achievementsData += `<li>${item}</li>`;
});
document.querySelector('.achievements-list').innerHTML = achievementsData;