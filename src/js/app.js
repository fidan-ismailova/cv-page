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
    let expDescArr = '';
    for (let i of item.description) {
        expDescArr += i + '<br>';
    }
    expirienceData += `<p>${expDescArr}</p>`;
    expirienceData += `</section>`;
});
document.querySelector('.experience-list').innerHTML = expirienceData;

/**
 * contact data
 */
const formatPhone = (phone) => {
    let phoneStr = phone.substring(0,4) + ' (' + phone.slice(4,6) + ') xxx-xx-' + phone.slice(-2);
    return phoneStr;
}
const formatEmail = (email) => {
    let emailStr = email.substring(0,1) + '***' + email.slice(-10);
    return emailStr;
}
const imgTemplate = (img) => {
    let imgSrc = `<span class="icon" style="-webkit-mask: url('${img}') no-repeat center; mask: url('${img}') no-repeat center"></span>`;
    return imgSrc;
}

document.querySelector('.contacts-block').innerHTML += `<li><a href="tel:${data.phone.tel}">${formatPhone(data.phone.tel) + imgTemplate(data.phone.icon)}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="mailto:${data.email.address}">${formatEmail(data.email.address) + imgTemplate(data.email.icon)}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="skype:${data.skype.login}?chat">${data.skype.name + imgTemplate(data.skype.icon)}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.linkedin.url}" target="_blank">${data.linkedin.name + imgTemplate(data.linkedin.icon)}</a></li>`
document.querySelector('.contacts-block').innerHTML += `<li><a href="${data.github.url}" target="_blank">${data.github.name + imgTemplate(data.github.icon)}</a></li>`
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

// let achievementsData = '';
// data.achievements.forEach(item => {
//     achievementsData += `<li>${item}</li>`;
// });
// document.querySelector('.achievements-list').innerHTML = achievementsData;