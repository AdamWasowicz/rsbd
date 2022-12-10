namespace RSBD_BE.Models
{
    public class StatusDTO
    {
        public bool EU_Write { get; set; }
        public bool EU_Read { get; set; }

        public bool US_Write { get; set; }
        public bool US_Read { get; set; }

        public bool AS_Write { get; set; }
        public bool AS_Read { get; set; }
    }
}
