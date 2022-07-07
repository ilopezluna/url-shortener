export const validate = (isValid: () => boolean) => {
    if (!isValid()) {
        throw new Error('Invalid request');
    }
}

export const hasField = (obj: any, field: string): boolean => {
    return obj[field] !== undefined;
}

export const isValidUrl = (candidate: string) => {
    let url;
    try {
        url = new URL(candidate);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}