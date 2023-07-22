
export const validateImageUrl = async (url) => {
    try {
        const response = await fetch(url);
        return response.ok;
    } catch (error) {
        return false;
    }
};

