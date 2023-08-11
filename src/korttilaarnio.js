import React, { useEffect, useState } from 'react';

export const Korttilaarnio = () => {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    const replicant = nodecg.Replicant('imageUrl');
    NodeCG.waitForReplicants(replicant).then(() => {
      replicant.on('change', value => {
        setImageUrl(value);
      });
    });
  });
  return (
    <div>
      <img src={imageUrl} />
    </div>
  );
};
