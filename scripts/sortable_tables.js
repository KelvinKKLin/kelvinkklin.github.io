document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".sortable-table th").forEach(headerCell => {
        // Upon bootstrap, do a one-time sort of any columns in class initCol.
        if (headerCell.classList.contains("initCol")) {
            sortByHeaderCell(headerCell);
        }

        // When a table header is clicked, sort the table.
        headerCell.addEventListener("click", () => {
            sortByHeaderCell(headerCell);
        })
    });
});

// This function gets the relevant objects on the page and calls sortTableByColumn().
function sortByHeaderCell(headerCell) {
    const tableElement = headerCell.parentElement.parentElement.parentElement;
    const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
    const currentIsAscending = headerCell.classList.contains("th-sort-asc");
    sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
}

// The following function was modified from https://youtu.be/8SL_hM1a0yo.
// This function sorts the table by a given column.
function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    const otherColumn = column == 0 ? 1 : 0;

    // Sort each row.
    const sortedRows = rows.sort((r1, r2) => {
        const r1Content = r1.querySelectorAll("td");
        const r2Content = r2.querySelectorAll("td")
        const r1ColText = r1Content[column].textContent + r1Content[otherColumn].textContent;
        const r2ColText = r2Content[column].textContent + r2Content[otherColumn].textContent;
        return r1ColText > r2ColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove all existing TRs from the table.
    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Re-add the newly sorted rows.
    tBody.append(...sortedRows);

    // Remember how the column is currently sorted.
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
}