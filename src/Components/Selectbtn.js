const Selectbtn = (setCategoryActive, setPantsActive) => (event) => {
    const selectedClass = event.target.className; // Get class name of clicked button

    if (selectedClass.includes("gender-select-btn-1")) {
        setCategoryActive(true);
        setPantsActive(false); // Hide pants initially
    } else if (selectedClass.includes("clothing-select-btn-3")) {
        setPantsActive(true); // Show pants
    } else {
        setCategoryActive(false);
        setPantsActive(false); // Hide pants if another category is clicked
    }
};

export default Selectbtn;




