export const getCapture = async () => {
    const camera = null;
    const snapshot = await camera.current.takeSnapshot({
    quality: 85,
    skipMetadata: true,
    })
};