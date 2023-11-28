interface AdoptionCard {
  adoptionId: string,
  requesterName: string,
  requesterPicturePath: string,
  responsibleName: string,
  responsiblePicturePath: string,    
  solicitationType: string,
  registerNumber: string,
  solicitationDate: string,
  animalId: string,
  animalPicturePath: string,
  animalName: string,
  animalGender: string,
  animalType: string,
  openDays: string,
  status: string,
  expectedDate: string,
}

export default AdoptionCard;