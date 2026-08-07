// ============================================================
// Section 05 – this : comprendre le problème et les solutions · Corrigé
// ============================================================

// 1. Le problème classique
{
  const user = {
    name: "Alex",
    greet() {
      console.log("Bonjour " + this.name);
    }
  };

  user.greet();

  const fn = user.greet;
  fn();
}


// 2. L’ancienne solution : that / self
{
  const user = {
    name: "Alex",
    greet() {
      const that = this;
      setTimeout(function () {
        console.log("Bonjour " + that.name);
      }, 100);
    }
  };

  user.greet();
}


// 3. Amélioration : bind
{
  const user = {
    name: "Alex",
    greet() {
      console.log("Bonjour " + this.name);
    }
  };

  const fn = user.greet.bind(user);
  fn();
}


// 4. Solution moderne : les arrow functions
{
  const user = {
    name: "Alex",
    greet() {
      setTimeout(() => {
        console.log("Bonjour " + this.name);
      }, 100);
    }
  };

  user.greet();
}
