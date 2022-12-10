namespace RSBD_BE.Interfaces
{
    public interface IRegionProvider
    {
        IBase_PostService provide(int regionId);

        int getRegionId(string regionName);
    }
}
