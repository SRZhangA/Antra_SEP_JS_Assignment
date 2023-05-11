function checkEmailId(str) {
    let atIndex = str.toLowerCase().indexOf('@');
    let dotIndex = str.toLowerCase().indexOf('.');

    if (atIndex >= 0 && dotIndex >= 0 && atIndex < dotIndex) {
        let charsBetween = dotIndex - atIndex - 1;
        return charsBetween > 0;
    }

    return false;
}
