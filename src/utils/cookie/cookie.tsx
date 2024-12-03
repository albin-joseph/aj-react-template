// Create cookie or set cookie
interface CookieOptions {
  days?: number | null;
  secure?: boolean;
  sameSite?: 'strict' | 'lax' | 'none';
}

const createCookie = (
  name: string,
  value: string,
  options: CookieOptions = {}
) => {
  let cookieString = `${name}=${value}; path=/`;

  if (options.days) {
    const date = new Date();
    date.setTime(date.getTime() + options.days * 24 * 60 * 60 * 1000);
    cookieString += `; expires=${date.toUTCString()}`;
  }

  if (options.secure) {
    cookieString += '; secure';
  }

  if (options.sameSite) {
    cookieString += `; samesite=${options.sameSite}`;
  }

  document.cookie = cookieString;
};

// Function to get a cookie value
const getCookie = (name: string) => {
  const cookie: any = {};
  document.cookie.split(';').forEach(function (el) {
    const [k, v] = el.split('=');
    cookie[k.trim()] = v;
  });
  return cookie[name];
};

// Function to delete a cookie
const deleteCookie = (name: string) => {
  document.cookie = name + '=; expires=' + new Date(0).toUTCString() + ';';
};

export { createCookie, getCookie, deleteCookie };
