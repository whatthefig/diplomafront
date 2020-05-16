import {
  popupSuccessContainer, popupSignupForm, errorMessageSignup, errorMessageSignin, headerLoggedOut, headerLoggedIn, headerButtonName, searchInput,
  menuLogoutName,
} from '../constants/mainConst';

export class MainApi {
  myData() {
    fetch('https://www.news-searcher.site/api/users/me', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        headerLoggedOut.classList.add('hidden');
        headerLoggedIn.classList.remove('hidden');
        headerButtonName.textContent = data.name;
        menuLogoutName.textContent = data.name;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signup(email, password, name) {
    fetch('https://www.news-searcher.site/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then((res) => {
        if (res.ok) {
          popupSignupForm.close();
          popupSuccessContainer.classList.remove('hidden');
          console.log(data);
          return res.json();
        } if (res.status === 409) {
          errorMessageSignup.classList.remove('hidden');
          errorMessageSignup.textContent = 'Такой пользователь уже есть';
        } else {
          errorMessageSignup.classList.remove('hidden');
          errorMessageSignup.textContent = `Что-то пошло не так (Ошибка: ${res.status})`;
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch((err) => {
        console.log(err);
      });
  }

  signin(email, password) {
    fetch('https://www.news-searcher.site/api/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        if (res.ok) {
          window.location.reload();
          return res.json();
        } if (res.status === 401) {
          errorMessageSignin.classList.remove('hidden');
          errorMessageSignin.textContent = 'Неправильные почта или пароль';
        } else {
          errorMessageSignin.classList.remove('hidden');
          errorMessageSignin.textContent = `Что-то пошло не так (Ошибка: ${res.status})`;
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout() {
    fetch('https://www.news-searcher.site/api/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          window.location.reload();
          return res.json();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  saveArticle(header, date, content, source, image, url) {
    fetch('https://www.news-searcher.site/api/articles', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: (searchInput.value[0].toUpperCase() + searchInput.value.toLowerCase().slice(1)),
        date,
        text: content,
        title: header,
        source,
        image,
        link: url,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
