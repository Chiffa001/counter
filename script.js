class Counter {
    increase() {
        this.value = +this.value + 1;
    }

    decrease() {
        this.value = +this.value - 1;
    }

    get value() {
        return localStorage.getItem("counterValue");
    }

    set value(value) {
        localStorage.setItem("counterValue", value);
    }
}

const counter = new Counter();

const counterEl = document.querySelector(".counter");
const counterValueEl = document.querySelector(".counter__value");

const fillCounterValueEl = () => {
    counterValueEl.textContent = counter.value;
};

const changeCounter = ({ target }) => {
    if (!target.classList.contains("btn")) return;
    target.dataset.operation === "increase"
        ? counter.increase()
        : counter.decrease();
    fillCounterValueEl();
};

counterEl.addEventListener("click", changeCounter);

window.addEventListener("storage", fillCounterValueEl);

document.addEventListener("DOMContentLoaded", () => {
    if (!counter.value) counter.value = 0;
    fillCounterValueEl();
});
