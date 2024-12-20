export function navigateTo(page, useReplace = false) {
    if (useReplace) {
        location.replace(page);
    } else {
        location.href = page;
    }
}