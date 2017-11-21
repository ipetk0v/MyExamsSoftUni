using CameraBazaar.Data.Models;
using CameraBazaar.Services.Models;
using System.Collections.Generic;

namespace CameraBazaar.Services
{
    public interface ICameraService
    {
        void Create(
            CameraMakeType make,
            string model,
            decimal price,
            int quantity,
            int minShutterSpeed,
            int MaxShutterSpeed,
            MinISOType minISO,
            int maxISO,
            bool isFullFrame,
            string videoResolution,
            IEnumerable<LightMeteringType> lightMetering,
            string description,
            string imageURL,
            string userId
            );

        IEnumerable<AllCamerasModel> All();

        AllCamerasModel Details(int id);
    }
}
