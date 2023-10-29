UPPER = [
    "dips", "push-ups", "DB bench", "DB incline bench", "triceps extensions",
    "tricep pushdowns", "DB OHP"
]

LOWER = ["chin-ups", "pull-ups", "inverted rows",  "DB rows", "cable rows",
"barbell rows", "face pulls", "band pull-aparts", "lat pulldown", "curls"]

CORE = ["hanging leg raises", "back raises", "reverse hyperextensions",
"lunges", "step-ups", "Bulgarian one-leg squats", "KB snatches", "KB swings"]


document.getElementById("upper-text").innerText = chance.pickone(UPPER)
document.getElementById("lower-text").innerText = chance.pickone(LOWER)
document.getElementById("core-text").innerText = chance.pickone(CORE)
