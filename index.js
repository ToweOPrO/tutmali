const Eris = require("eris");
const keep_alive = require('./keep_alive.js')

// Aktif tutmak istediğiniz hesabınızın tokenini koyun.
const bot = new Eris(process.env.token);

bot.on("error", (err) => {
  console.error(err); // Hesabınızdan çıkış yaptığınızda tokeniniz değişir.
});

bot.connect(); // Projeyi aktifleştirir.

// Hiçbir bilginiz yok ise hiçbir şeye dokunmanızı önermem.
