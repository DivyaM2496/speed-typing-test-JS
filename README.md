# Typing Speed Checker with Quotes

A simple web application that tests your typing speed by providing random quotes to type and measuring the time taken to type them correctly.

---

## **Demo**

- A random quote is displayed.
- Start typing the quote in the input box.
- Press **Submit** to check if the typed text matches the quote.
- Your typing time in seconds will be displayed if typed correctly.
- Press **Reset** to get a new random quote.

---

## **Features**

- Fetches random quotes from an API.
- Measures typing time with a live timer.
- Validates typed input against the quote.
- Displays typing speed in seconds if correct.
- Shows an error message if the input does not match.
- Spinner displayed while fetching quotes.

---

## **Technologies Used**

- HTML
- CSS
- JavaScript (Vanilla JS)
- [CCBP Random Quote API](https://apis.ccbp.in/random-quote)

---

## **How to Use**

1. Open `index.html` in your browser.
2. Wait for the random quote to load.
3. Type the quote exactly as displayed in the input box.
4. Click **Submit** to check your typing speed.
5. Click **Reset** to load a new random quote.

---

## **Code Highlights**

- Dynamic fetching of quotes using `fetch` API.
- Real-time timer implemented with `setInterval`.
- DOM manipulation to display quotes, timer, and results.
- Input validation to check for exact match with the quote.

---

## **Future Improvements**

- Add support for multiple quotes in a session and calculate average typing speed.
- Highlight errors in typing while typing.
- Store typing records in local storage for tracking progress.
- Make the application responsive and mobile-friendly.

---

## **Author**

Your Name
